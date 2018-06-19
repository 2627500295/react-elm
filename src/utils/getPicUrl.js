/**
 * 饿了么图片地址解析
 *
 * 参考文章
 * [String.prototype.split()]{@link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split}
 * [String.prototype.endsWith()]{@link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith}
 * [String.prototype.slice()]{@link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice}
 * [image_hash 解析规则]{@link https://github.com/Lixiaorui1/newproject/blob/dev/eleme/src/assets/js/find.js#L21-L24}
 */

/**
 * 图片 CDN 域名
 */
const BASEURL = '//fuss10.elemecdn.com/';

/**
 * 获取图片扩展名
 *
 * @param {string} hash 图片哈希值
 * @returns {string} 图片扩展名
 */
const getPictureExtension = (hash) => {
  const extensions = ['jpg', 'jpeg', 'gif', 'png'];
  return extensions.find(ext => hash.endsWith(ext));
};

/**
 * 解析图片路径
 *
 */
const getEncodePicture = hash => `${hash.slice(0, 1)}/${hash.slice(1).slice(0, 2)}/${hash.slice(3)}`;

/**
 * 获取图片URL
 *
 * @param {*} hash 图片哈希值
 */
const getPictureURL = (hash, url = BASEURL) => `${url}${getEncodePicture(hash)}.${getPictureExtension(hash)}`;

/**
 * 导出方法
 */
export default getPictureURL;
