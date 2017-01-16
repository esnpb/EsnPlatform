import React from 'react';
import ButtonDropdownItem from './Button';
import MessageDropdownItem from './Message';
import NotificationDropdownItem from './Notification';
import ProgressBarDropdownItem from './ProgressBar';
import SeeAllDropdownItem from './SeeAll';

export default function DropdownItem(props) {
  switch (props.type) {
    case 'button': {
      return (
        <ButtonDropdownItem {...props} />
      );
    }
    case 'message': {
      return (
        <MessageDropdownItem {...props} />
      );
    }
    case 'notification': {
      return (
        <NotificationDropdownItem {...props} />
      );
    }
    case 'progressbar': {
      if (!props.progress) {
        throwError('Progress nie istnieje w props');
      }
      return (
        <ProgressBarDropdownItem {...props} />
      );
    }
    case 'see-all': {
      return (
        <SeeAllDropdownItem {...props} />
      );
    }
    case 'divider': {
      return (
        <li class="divider" />
      );
    }
    default: {
      return <li />;
    }
  }
}
