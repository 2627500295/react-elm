/**
 * 获取地理位置定位(饿了么)
 *
 * @return {object} 返回经度和纬度
 */
export default function getPosition() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!position) {
            return reject(new Error('BROWSER_MODE_PERMISSON_FAILED'));
          }

          return resolve(position);
        },
        reject,
        {
          // timeout: 20000,
          maximumAge: Infinity,
          enableHighAccuracy: false,
        },
      );
    });
  }

  return Promise.reject();
}
