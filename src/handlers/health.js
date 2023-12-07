import { easyResponse } from '../utils/easyResponse';

export function health(_event, _context, callback) {
  callback(easyResponse('', 200, 'Function is running'));
}
