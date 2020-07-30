/**
 * SECTION ClientAPI
 * @NOTE Client API
 * @SINCE 2019-12-31 10:46:56
 * @AUTHOR OngDV
 */
import { backend_url } from '../Utils';
import { ApiManager } from '../Utils';
const $http = new ApiManager();
export default {
  // SECTION Todo
  /**
   * 전체
   */
  findAllTodo: async () => {
    const url = `${backend_url}/todoList`;
    return await $http.get(url);
  },
  /**
   * 등록
   */
  registerTodo: async (todo) => {
    const url = `${backend_url}/todoList`;
    return await $http.post(url, todo);
  },
  /**
   * 수정
   */
  modifyTodo: async (todo) => {
    const url = `${backend_url}/todoList`;
    return await $http.put(url, todo);
  },
  /**
   * 삭제
   */
  removeTodo: async (id) => {
    const url = `${backend_url}/todoList/${id}`;
    return await $http.delete(url);
  },
};
