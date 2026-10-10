# Production landing

The public landing is served by the `sciencepeaks-landing` Docker container on the configured SciencePeaks server. Host port 8005 maps to Nginx port 80, behind the existing HTTPS proxy. It is separate from the product webapp and backend containers. GitHub Pages also publishes `main/docs`, but DNS currently routes the public domain to this Nginx deployment.

The image serves the reviewed static export from `docs/`. The Nginx configuration compresses text assets, revalidates HTML, caches hashed Next assets for one year, returns actual 404 responses and redirects the apex hostname to the existing `www` canonical. Relative directory redirects preserve HTTPS through the proxy. The Docker build context includes only the export and these configuration files.

## Release sequence

1. Build the source with `npm run build`, complete export/UI checks, and commit the implementation.
2. Copy the validated `out/` into `docs/`, retain `.nojekyll` and the `www.sciencepeaks.ai` CNAME. Keep the previous export's distinct `_next/static` files for cached-page compatibility; do not retain its HTML. Commit and push the source/export to `main` using a fast-forward update. The prior landing remains on `archive/landing-before-redesign-2026-10-09`.
3. Fetch that exact release commit in the clean server checkout. Build an immutable image with `docker build -f deploy/landing/Dockerfile --label org.opencontainers.image.revision=<release-sha> -t sciencepeaks-landing:<release-sha> .`.
4. Start a candidate on an unused loopback port. Check Nginx configuration, image health, the homepage hash against the reviewed export, every referenced local asset, legal routes, canonical redirect, compression, caching and missing-path status before switching production.
5. Preserve the old container and image. Stop and rename only `sciencepeaks-landing`, then start the reviewed image under that name on host port 8005 with `--restart unless-stopped`. Restore the old container immediately if health or live checks fail. Keep the rollback container until the release has been accepted.
6. Verify the actual public HTTPS URL, canonical redirects, robots, sitemap, static resources and browser rendering after cutover. Confirm the GitHub Pages run separately. Stop and remove the owned candidate and close any QA tunnel when checks finish.

Rollback means stopping the new landing container, moving it aside, restoring the preserved container's `sciencepeaks-landing` name and starting it on the original port. Revert the release commit on `main` separately if repository/Pages rollback is also required. Preserve other containers and shared data throughout.
