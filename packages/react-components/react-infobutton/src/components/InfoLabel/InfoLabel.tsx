/* eslint-disable deprecation/deprecation */
import * as React from 'react';

import type { ForwardRefComponent } from '@fluentui/react-utilities';
import type { InfoLabelProps } from './InfoLabel.types';
import { renderInfoLabel_unstable } from './renderInfoLabel';
import { useInfoLabel_unstable } from './useInfoLabel';
import { useInfoLabelStyles_unstable } from './useInfoLabelStyles.styles';

/**
 * InfoLabel component
 *
 * @deprecated use {@link @fluentui/react-components#InfoLabel} from `\@fluentui/react-components` or `\@fluentui/react-infolabel` instead
 */
export const InfoLabel: ForwardRefComponent<InfoLabelProps> = React.forwardRef((props, ref) => {
  const state = useInfoLabel_unstable(props, ref);

  useInfoLabelStyles_unstable(state);
  return renderInfoLabel_unstable(state);
});

InfoLabel.displayName = 'InfoLabel';
