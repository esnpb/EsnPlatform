import React from 'react';

export default function InfoPanelHeader(props) {
  const iconClass = `fa ${props.icon.startsWith('fa-') ? props.icon : `fa-${props.icon}`} fa-5x`;
  return (
    <div class="panel-heading">
      <div class="row">
        <div class="col-xs-3">
          <i class={iconClass} />
        </div>
        <div class="col-xs-9 text-right">
          <div class="huge">{props.counter}</div>
          <div>{props.title}</div>
        </div>
      </div>
    </div>
  );
}

InfoPanelHeader.propTypes = {
  title: React.PropTypes.string,
  counter: React.PropTypes.number,
  icon: React.PropTypes.string,
};

InfoPanelHeader.defaultProps = {
  title: '',
  counter: 0,
  icon: 'comments',
};
