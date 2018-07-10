/*
    Copyright (C) 2018 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

describe('GGRC.Components.dropdownFormField', function () {
  'use strict';
  let viewModel;

  beforeEach(function () {
    viewModel = GGRC.Components
      .getViewModel('dropdownFormField');
    spyOn(viewModel, 'dispatch');
    viewModel.attr('fieldId', 1);
  });

  it('does not fire valueChanged event on' +
    ' first value assignation', function () {
    viewModel.attr('value', '');
    expect(viewModel.dispatch).not.toHaveBeenCalled();
  });

  it('sets the value of the input', function () {
    viewModel.attr('value', 'test');
    expect(viewModel.attr('inputValue')).toEqual('test');
  });

  it('does not fire valueChanged event if value wasn\'t changed', function () {
    viewModel.attr('value', '');
    viewModel.attr('inputValue', 'newValue');
    viewModel.dispatch.calls.reset();
    viewModel.attr('inputValue', 'newValue');
    expect(viewModel.dispatch).not.toHaveBeenCalled();
  });

  it('fires valueChanged event on input value change', function () {
    viewModel.attr('value', '');
    viewModel.attr('inputValue', 'newValue');
    expect(viewModel.dispatch).toHaveBeenCalledWith({
      type: 'valueChanged',
      fieldId: 1,
      value: 'newValue',
    });
    viewModel.attr('inputValue', 'newValue2');
    expect(viewModel.dispatch).toHaveBeenCalledWith({
      type: 'valueChanged',
      fieldId: 1,
      value: 'newValue2',
    });
  });
});
