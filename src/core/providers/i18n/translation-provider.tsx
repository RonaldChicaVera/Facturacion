import React, { ComponentType } from 'react';
import { I18nextProvider, withTranslation } from 'react-i18next';

import i18next from './config';

export default function TranslationProvider(WrappedComponent: Function) {
  // eslint-disable-next-line max-len
  const WrappedComponentTranslated = withTranslation()(WrappedComponent as ComponentType<{ language: string }>);

  return (props: object) => (
    <I18nextProvider i18n={i18next}>
      <WrappedComponentTranslated {...props} language={i18next.language} />
    </I18nextProvider>
  );
}
