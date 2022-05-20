import Axios from 'axios';

export const menuApi = () => Axios.get("https://starbugs.herokuapp.com/api/menus/");