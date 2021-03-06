import { describe, it } from 'mocha';
import { expect } from 'chai';

import {
  ADD_TOAST,
  REMOVE_TOAST,
} from '../../../../src/dashboard/actions/messageToasts';
import messageToastsReducer from '../../../../src/dashboard/reducers/messageToasts';

describe('messageToasts reducer', () => {
  it('should return initial state', () => {
    expect(messageToastsReducer(undefined, {})).to.deep.equal([]);
  });

  it('should add a toast', () => {
    expect(
      messageToastsReducer([], {
        type: ADD_TOAST,
        payload: { text: 'test', id: 'id', type: 'test_type' },
      }),
    ).to.deep.equal([{ text: 'test', id: 'id', type: 'test_type' }]);
  });

  it('should add a toast', () => {
    expect(
      messageToastsReducer([{ id: 'id' }, { id: 'id2' }], {
        type: REMOVE_TOAST,
        payload: { id: 'id' },
      }),
    ).to.deep.equal([{ id: 'id2' }]);
  });
});
