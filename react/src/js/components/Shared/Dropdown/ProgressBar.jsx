import React from 'react';

export default function ProgressBarDropdownItem(props) {
  const progress = props.progress;
  console.log('progress', progress);
  console.log('props', props);
  const progressBarStyle = {
    width: `${progress.val}%`,
  };
  const typeClass = `progress-bar progress-bar-${progress.type}`;
  const percentCompleteTitle = `${progress.val}% Complete`;
  const percentCompleteLabel = `${percentCompleteTitle} (${progress.type})`;
  return (
    <li>
      <a href={props.href}>
        <div>
          <p>
            <strong>{props.title}</strong>
            <span class="pull-right text-muted">
              {percentCompleteTitle}
            </span>
          </p>
          <div class="progress progress-striped active">
            <div
              class={typeClass}
              role="progressbar"
              aria-valuenow={progress.val}
              aria-valuemin={progress.minval}
              aria-valuemax={progress.maxval}
              style={progressBarStyle}
            >
              <span class="sr-only">
                {percentCompleteLabel}
              </span>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
