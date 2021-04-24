import * as React from 'react';
import { Chip } from '@material-ui/core';
import styles from '../scss/access-level-chip.scss';

export type AccessLevel = 'all' | 'restricted' | 'none';

export interface AccessLevelChipProp {
  level: AccessLevel;
}

export const AccessLevelChip: React.FC<AccessLevelChipProp> = ({
  level,
}): JSX.Element => {
  const getClassName = () => {
    switch (level) {
      case 'all':
        return styles.all;
      case 'restricted':
        return styles.restricted;
      case 'none':
        return styles.none;
    }
  };

  const getLabel = () => {
    switch (level) {
      case 'all':
        return 'All Access';
      case 'restricted':
        return 'Restricted Access';
      case 'none':
        return 'No Access';
    }
  };

  return (
    <Chip
      className={`${styles.accessLevelChip} ${getClassName()}`}
      variant={'outlined'}
      label={getLabel()}
    />
  );
};
