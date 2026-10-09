"use client";

import { useId, useState, type CSSProperties } from "react";
import { TimerIcon, TrendUpIcon } from "@phosphor-icons/react";

const format = (value: number) =>
  value.toLocaleString("en", { maximumFractionDigits: 2 });

export function ActivityVolume() {
  const id = useId();
  const [mets, setMets] = useState(4);
  const [minutes, setMinutes] = useState(30);
  const gross = (mets * minutes) / 60;
  const net = ((mets - 1) * minutes) / 60;
  const chartWidth = (minutes / 90) * 450;
  const chartTop = 320 - mets * 30;
  const activeHeight = (mets - 1) * 30;
  const labelInside = chartWidth > 115 && activeHeight > 50;
  const labelCentered = labelInside || chartWidth > 375;

  return (
    <div className="sp-volume">
      <div className="sp-volume-controls">
        <p className="sp-volume-kicker">Try an activity example</p>
        <p className="sp-volume-guide">
          Height is intensity. Width is time. The area is activity volume.
        </p>
        <div className="sp-volume-control">
          <label className="sp-volume-label" htmlFor={`${id}-mets`}>
            <span>
              <TrendUpIcon size={21} aria-hidden="true" />
              Intensity
            </span>
            <strong>
              {format(mets)} <span>METs</span>
            </strong>
          </label>
          <input
            id={`${id}-mets`}
            type="range"
            min={1}
            max={8}
            step={0.5}
            value={mets}
            aria-valuetext={`${format(mets)} METs`}
            onChange={(event) => setMets(Number(event.target.value))}
            style={
              {
                "--range-progress": `${((mets - 1) / 7) * 100}%`,
              } as CSSProperties
            }
          />
          <div className="sp-volume-range-ends" aria-hidden="true">
            <span>1 MET</span>
            <span>8 METs</span>
          </div>
        </div>
        <div className="sp-volume-control">
          <label className="sp-volume-label" htmlFor={`${id}-minutes`}>
            <span>
              <TimerIcon size={21} aria-hidden="true" />
              Duration
            </span>
            <strong>
              {minutes} <span>min</span>
            </strong>
          </label>
          <input
            id={`${id}-minutes`}
            type="range"
            min={5}
            max={90}
            step={5}
            value={minutes}
            aria-valuetext={`${minutes} minutes`}
            onChange={(event) => setMinutes(Number(event.target.value))}
            style={
              {
                "--range-progress": `${((minutes - 5) / 85) * 100}%`,
              } as CSSProperties
            }
          />
          <div className="sp-volume-range-ends" aria-hidden="true">
            <span>5 min</span>
            <span>90 min</span>
          </div>
        </div>
        <div className="sp-volume-result">
          <div className="sp-volume-result-gross">
            <span id={`${id}-gross-label`}>Gross volume</span>
            <output
              htmlFor={`${id}-mets ${id}-minutes`}
              aria-labelledby={`${id}-gross-label`}
            >
              {format(gross)} <span>MET·h</span>
            </output>
            <small>Includes the resting reference</small>
          </div>
          <div className="sp-volume-result-net">
            <span id={`${id}-net-label`}>Net active volume</span>
            <output
              htmlFor={`${id}-mets ${id}-minutes`}
              aria-labelledby={`${id}-net-label`}
            >
              {format(net)} <span>MET·h</span>
            </output>
            <small>Counts volume above 1 MET</small>
          </div>
        </div>
        <p className="sp-volume-note">
          Illustrative calculation. Different intensities and durations can add
          up to the same volume.
        </p>
      </div>

      <figure className="sp-volume-chart">
        <svg
          viewBox="0 0 600 390"
          role="img"
          aria-labelledby={`${id}-chart-title ${id}-chart-description`}
        >
          <title id={`${id}-chart-title`}>
            Activity volume is intensity multiplied by duration
          </title>
          <desc id={`${id}-chart-description`}>
            {format(mets)} METs for {minutes} minutes gives {format(gross)}{" "}
            gross MET hours and {format(net)} net MET hours above the 1 MET
            reference. Rectangle height represents intensity and width
            represents time.
          </desc>
          <defs>
            <linearGradient
              id={`${id}-area-gradient`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#087f8b" />
              <stop offset="100%" stopColor="#086674" />
            </linearGradient>
          </defs>
          <g aria-hidden="true">
            <text
              className="sp-volume-svg-heading"
              x="76"
              y="31"
              fill="#143445"
              fontSize="17"
              fontWeight="600"
            >
              Intensity × duration
            </text>
            {[0, 1, 3, 6, 8].map((tick) => (
              <g key={tick}>
                <line
                  x1="76"
                  x2="540"
                  y1={320 - tick * 30}
                  y2={320 - tick * 30}
                  stroke="#a6ccd4"
                  strokeOpacity=".48"
                />
                <text
                  x="59"
                  y={325 - tick * 30}
                  textAnchor="end"
                  fontSize="13"
                  fill="#284d5d"
                >
                  {tick}
                </text>
              </g>
            ))}
            <rect
              className="sp-volume-base"
              x="76"
              y="290"
              width={chartWidth}
              height="30"
              fill="#dceff1"
            />
            <rect
              className="sp-volume-area"
              x="76"
              y={chartTop}
              width={chartWidth}
              height={activeHeight}
              fill={`url(#${id}-area-gradient)`}
            />
            <line
              x1="76"
              x2="540"
              y1="290"
              y2="290"
              stroke="#087f8b"
              strokeWidth="1.4"
              strokeDasharray="5 5"
            />
            <line x1="76" x2="540" y1="320" y2="320" stroke="#284d5d" />
            <line x1="76" x2="76" y1="66" y2="320" stroke="#284d5d" />
            <text
              className="sp-volume-svg-value"
              x={labelCentered ? 76 + chartWidth / 2 : 87 + chartWidth}
              y={labelInside ? chartTop + activeHeight / 2 + 7 : chartTop - 13}
              textAnchor={labelCentered ? "middle" : "start"}
              fill={labelInside ? "#ffffff" : "#143445"}
              fontSize="19"
              fontWeight="600"
            >
              {format(mets)} × {minutes}
            </text>
            <text
              x="26"
              y="214"
              transform="rotate(-90 26 214)"
              textAnchor="middle"
              fontSize="13"
              fill="#284d5d"
            >
              Intensity · METs
            </text>
            {[0, 30, 60, 90].map((tick) => (
              <text
                key={tick}
                x={76 + (tick / 90) * 450}
                y="344"
                textAnchor="middle"
                fontSize="13"
                fill="#284d5d"
              >
                {tick}
              </text>
            ))}
            <text
              x="304"
              y="373"
              textAnchor="middle"
              fontSize="13"
              fill="#284d5d"
            >
              Duration · minutes
            </text>
          </g>
        </svg>
        <figcaption className="sp-volume-chart-caption">
          <span>
            <i className="sp-volume-key-active" aria-hidden="true" />
            Net active volume
          </span>
          <span>
            <i className="sp-volume-key-base" aria-hidden="true" />1 MET
            reference
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
