import { render } from '@testing-library/react';
import FormPage from '@/pages/form';

import '@testing-library/jest-dom';

function task(_name, _tests) {
  describe(_name, () => {
    _tests.forEach(test => {});
  });
}

function renderPage(page) {
  return render(page);
}

function hasElement(element) {
  return page => {
    expect(page.container).toHaveTextContent(element);
  };
}

task('Form', [[renderPage(<FormPage />), hasElement('button')], []]);
