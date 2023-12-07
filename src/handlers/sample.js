import { getUsers } from '../Models/Users';
import { easyResponse } from '../utils/easyResponse';

export async function sample(_event, _context, _callback) {
  const data = await getUsers();
  return easyResponse(data, 200, 'users fetched succesgully');
}
