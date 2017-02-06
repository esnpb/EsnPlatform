import React from 'react';

export default function ProgressBarDropdownItem(props) {
  const progress = props.progress;
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
            <strong>
              { props.titles[props.language] != null ?
                props.titles[props.language] :
                props.titles.gb }
            </strong>
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

ProgressBarDropdownItem.propTypes = {
  progress: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
    val: React.PropTypes.number.isRequired,
    maxval: React.PropTypes.number.isRequired,
    minval: React.PropTypes.number.isRequired,
  }).isRequired,
  titles: React.PropTypes.shape({
    gb: React.PropTypes.string.isRequired,
    pl: React.PropTypes.string,
  }),
  language: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
};

ProgressBarDropdownItem.defaultProps = {
  language: 'gb',
  titles: {
    gb: '',
    pl: '',
  },
};
