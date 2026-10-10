import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Account Deletion | SciencePeaks";
const description =
  "Request deletion of your SciencePeaks account, your stored data, or both, and learn how your request is handled.";
const url = "https://www.sciencepeaks.ai/account-deletion/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    siteName: "SciencePeaks",
    locale: "en_GB",
    title,
    description,
    url,
    images: ["/landing/social-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/landing/social-preview.jpg"],
  },
};

export default function AccountDeletionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
