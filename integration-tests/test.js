const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const gateway = 'https://gateway-testnet.arcana.network/';
const gateway = 'http://localhost:9010/';
// const gateway = 'https://gateway01-testnet.arcana.network/';
// const gateway = 'https://gateway-dev.arcana.network/';
const chainId = 40405;
const appId = 21;
const debug = false;
const generateString = (length) => {
  let result = '';
  const charactersLength = characters.length;
  while (result.length < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const MockFile = (name, size, mimeType) => {
  name = name || 'mock.txt';
  size = size || 1024;
  mimeType = mimeType || 'plain/txt';
  var blob = new Blob([generateString(size)], { type: mimeType });
  blob.lastModifiedDate = new Date();
  blob.name = name;
  return blob;
};

const bytesToHexString = (bytes) => {
  if (!bytes) return null;
  bytes = new Uint8Array(bytes);
  var hexBytes = [];
  for (var i = 0; i < bytes.length; ++i) {
    var byteString = bytes[i].toString(16);
    if (byteString.length < 2) byteString = '0' + byteString;
    hexBytes.push(byteString);
  }
  return hexBytes.join('');
};

const makeEmail = () => {
  var strValues = 'abcdefg12345';
  var strEmail = '';
  var strTmp;
  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  strEmail = strEmail + '@example.com';
  return strEmail;
};

describe('Upload File', () => {
  let file,
    did,
    arcanaInstance,
    access,
    receiverWallet,
    sharedInstance,
    file_count = 0;

  before(async () => {
    file = MockFile('aaaaaaaaaaaaa.txt', 2 ** 20, 'text/plain');
    file = new File([file], file.name, { type: file.type });
    arcanaInstance = new arcana.storage.StorageProvider({
      appId,
      provider: window.ethereum,
      email: makeEmail(),
      gateway,
      chainId,
      debug,
    });
    // await arcanaInstance.login();
  });

  // it('My Files should return empty array', async () => {
  //   let files = await arcanaInstance.myFiles();
  //   chai.expect(files.length).equal(0);
  // });

  // it('Shared Files should return empty array', async () => {
  //   let files = await arcanaInstance.sharedFiles();
  //   chai.expect(files.length).equal(0);
  // });

  // it('Should download a file', async () => {
  //   let downloadArcana = new arcana.storage.StorageProvider({
  //     gateway,
  //   });
  //   await downloadArcana.downloadDID('0x03dcef07ceeb3c4bbb554a568b3a33d58df3bb7e9c527f9e1204a124ea5d1ee0');
  // });

  it('Should upload a file', async () => {
    let upload = await arcanaInstance.getUploader();
    let complete = false;
    upload.onSuccess = () => {
      console.log('Completed file upload');
      complete = true;
      file_count += 1;
    };
    did = await upload.upload(file);
    console.log('did', did);
    upload.onError = (err) => {
      console.log(err);
      throw Error(err);
    };
    while (!complete) {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }
  });

  // it('Make metadata URL', async () => {
  //   let nftArcana = new arcana.storage.StorageProvider({
  //     gateway,
  //   });
  //   let img =
  //     'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDxANDQ8NDg8PDQ0NDQ0NDQ8NDw0NFREWFhURFRUYHSggGBolHhUVITEhJSkrLi4uFx80OTQsOCgtLisBCgoKDg0OFxAQGisfHh0tKy0tKystLSsrKy0rKy0rLS0tLS0rKy0tLS0tLSstLS0tLS0tKy0rLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABPEAACAQIBBgYLCwkIAwAAAAAAAQIDBBEFBgcSIUExUWFxc5ETIjIzUoGSobGywRcjNEJTVHKT0eHjFDVDYmNkg5SkFkR0gqPC0tMkJaL/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQCBQYB/8QAOBEAAgEBAgoHBwQDAAAAAAAAAAECAwQRBRIhMUFRcaGx0RMUIlJhgZEVIzJCweHwJDM0YnKy8f/aAAwDAQACEQMRAD8AnEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHiclFOUmkksW28EkR1nVn625ULB4JbJXG9/Q+0moUJ1pXQXJHkpJI7q/wAq21ssa9anT5JS7Z+LhOdutIVjDZTjVq8qjqrzkVVridSTnUlKcntcpNybLesbengukl222/T7kDqTeYkqrpLgu5tZPnrqP+xlp6TX8yX81+GR3rFNYn6hZ+7vfM8vqayRfdOfzJfzf4ZT3Tn8yX83+GR3rDE86lZ+7vfMyXSPSSJ7p7+ZL+b/AAx7p37kv5t/9ZHeIxPOp2fub3zJYwm9JInunP5kv5t/9Y9079yX82/+sjzEYnnU7P3N75kqpSJD905/Mv6v8Me6e/mP9X+GR3iMTzqdn7m98yWNBskP3T/3H+r/AAyvun/uX9X+GR1iecR1Oz9ze+ZIrNeSRHSfHfZtc1wn/sMu30lWku+Ua0OVOM0vQRZiDx2Gzv5bvN/W8kVkROWTc6LC6wVKvDWfxJ+9y6mbk+dFxnUZtZ63Nm1Cq5V6HA4zbc4L9Vv0FSrg67LTfk+ZHOyNK+JMgMPJmUaN3TjWoSU4S64via3MzDWNNO5lNq4FAVPAAUABUAAAA1mcOUlZ2ta4fDCD1eWb2LznsYuTSWkHDaSc525OxoSwjH4RKL7qXgc3GR7rHmrWlOUpybcpScpN8LbeLLesdTRpRowUI/8AWZ9DeX9YprFrWDkZ3mXQF7WKaxbgpSajFSlJ8EYptvxHT5MzCylcpScIUIvfXk4yw+ik2RTrRgr5O4y6KKz5DnNYa5Ilvou+VunjvVOGHnZlw0XWm+5uXzdjXsKrt9Fadx6nTWkjDXGuSotGNj8rcvx0v+JX3M7H5W58qH2EfX6Xj6EqqUvxEVaw1iVfczsflLnyof8AEr7mdj8rc+VD7Dzr1Lx9CRV6Pj6EU6w1iVXoysflbnrp/wDE8y0Y2e6vcrxUn/tHXqXj6EitNHx9CLMT0SRW0X0/0dzUX04RfowNRf6Ob6ni6U6NZcSbhN+JrDzmatlJ6SWNoovNL6HHlMDIvbGtby1K9OdKXFOLWPNxllE6neWVFNXo84FcCpUyxhim8zQzhnYV1tbozaVaG7DwlyomilVjOKnFpxklKLXA09589YEraM8qutbSoTeMqEsI4/Jvg6tpr7fSTXSLPp/Nxr7bQydIvM7QAGqNYAAAAAADhNLd04WlKkv0tdY80U2d2RnphnttY8lWXqr2lqxL38fDL6Izpq+SI1PR6wK4G/cy8ong2GQciV8oVlQoLlnN9zThvk/sMOnTlOUYQWMpSUYpcLk3gkTpmnkKGT7eNJJOpJKVae+U+LmRTtVq6OOTOzGrJU14njNvNa1ydBdjip1cFr15pOUnycSN+YOVsp0bOlKvXkowj1ye6KW9kU5ez9vbpuNCTtqXAlDZUkuWX2GojCdWV79WQUqM6zvXqS9WuacO7nCP0pJGLPLFnHhuKC56kSA6tWdR61ScpvjnJyfnPKiT9UWmRcjg7XLd9yeXnDYLhurb62JT+0eTvndt9bEgnUGqh1WOtmawZHvPcTt/aPJ3zu2+tiP7R5O+d231sSCdQao6tDWzP2XDvPcTv/aHJ/zu3+tiXI5bsnwXNB/xYkCapRx5R1WOseyo957j6EpX1CfcVacuacWZJ84LWTxTknua2NG5yRnZf2bWrVlOC4aVRupF9e1GDsupkc8FSS7Er9qu3k05SybQuoOnXpxqRfGliuVPcRRnfmlUsJdlp41LeTwUt9N+DL7SQ81c6KGUYbPe60V75Sb2/Sjxo3V3bQrQlSqRUoTi4yi96ZhTqzoyu9UVKVapZp4sltX59D58RXA2ecuSJWNzOi8XHHWpSfxqb4PsNcjbRmmr0b+N0oqSzM84HX6MblwvdTdVozi+dYNeg5E3uZE9XKFvyzUes8rdqnJeDIrRTvpSXgyawAaM5oAAAAAAEX6YH77adHW9aBKBF+mDvtp0Vb1oFmxv3y8+DJrP+4iPhgVQZt5SNpGB1WjTJquL5VJLGNvB1f8AM9kSZiO9EVvhTuKu9zpwT5Enj6Tu8o1uxUatTwKVSfjUWzT2qblUfga61O+q1qyEQ6RMtyu7uVGMn2G3bpxinslUXdS9hzMYlZSc5Tm+GUpSfO3iVSLkboq5G9pUVCKitASPQB45FhQAMmwydXuZ9joU5zl+qti53uOvyfo4uJpO4q06X6sMakuvgI5VEs5jVrUqXxyS4+hw4JOjoztt9xXx+jT+ww7zRo0m6Fzi9yqw1cfGjDp4kMcIWZ/NuZH2B5aNvljN28su/Unq+HDt4vx7vGalMkVTUXYYs1fF3rWjv80sxaVWlG4vNZ9kWtTpReqlHc5My849Htu6UqlnrRqwTkqblrRqYbtvAzqc2b6ncWtGdNp4U4QklwxlFYNPqM2/u6dCnOrVkowhFybfoKjqzxr7zmp2y0Ks8rTvzeea4gPJV/Us68K1JtShNNrHDWjvi+Rk95Ou43FGnXh3NSEZrxrgPn+5lrzlLDDWnKWHFiyXdGdw6mT4p/o6s6a5sE16SWur0mbDC1FdGqmlO71+5haUsnKdCndJdtSnqSfHCX3pEYom7O+h2SxuY/snJc6eJCMSayz7F2ozwXLGo3anxy8ypucz3/7C26aHtNObjND4fa9NAszfZex8C5Wj7uWx8GTcADTHJAAAAAAAjDS93216Ot68STyMdLvfbToq3rQJ7N+6vPgyxZFfVXnwZHyQZ6RRmxlI3kYEr6KI4WVR8dxPzRR0WdEsLG6f7vU9BotFi/8AAf8AiKnqxNznh+b7v/DzNXN+8e001VX2pr+31IMij2ikUVRaxjqFEHQZpZs1MoTxljChBrsk98v1Y8pqslWE7qvToU+6nJLHwVvZOWS7Cna0YUKSwhBYLle9shqVLsiKOELX0EVGPxS3LXt0IpkzJtC0pqlQhGEVxLbJ8be9mW2lteznNNnLnBRyfS159tUliqVJPbJ8fIuUifLOcd5eybqVZKD4KcHqwiuLZw+MgSvNVZbBVtN827lreW/Zr9bvEmaWU7ZPB16CfE6sE/SZNKrGaxhKMlxxaaPnrB8fnMqxyjcW0tejVqQa29rLY+dPYzLEL8sCZOzPL4rJxJ7q04zi4zipRawlGSTTXE0RtnrmUqaldWcXqrGVSitup+tHk5DdZnZ5K8aoXOrCvh2slsjV+x8h2TWOxmKbRrYyr2Grc8mtaGvzM9BAmS8rXNo26FWdPHhSfay51wF/KeW7u7SVerOUVtUMcI48yNnn5kFWdxr01hRq4zgt0JfGj7Tm0WIu/KdPSVKqo1opZVnuyniUST9FEv8Axq0eKun1wRGbJJ0T94uOlp+oKj7JVwov00tq4nXZbjrWtwv3et6jIGW8n3KneK/QVvUZAWG187PbM85UwN8FTavqejcZo/nC16aHtNObjNH4fadNAtSfZex8DZ117uWx8CbgAas40AAAAAAEY6Xe+2vR1vWiScRppajjUtejretElou6aZbsP78fPgyP0hql6MCuoTTrHRxiSpovWFh/HqeiJts8fzfd/wCHma3RosLH+PU9ETaZ3fALroJlRy0nP1f5j/y+pCMYHrUL6gHAw6c6tI7PRZk9OpWuWu4iqcORz2t9S85I9SainJ8CTb5kcjoyglaVHvdxL1InQ5dm42txKPCqFXDyTJSvV5y2EL52uUfFIhzObKc726qVZPtVJ06a3Rgns+01aiX1D0ldQxjVR1sYRglGOZZCxgMC44HlolU0zO4pTnKEozg3FqSlGS2NSTxTJvzYyn+WWtKv8Zx1Z9ItjIOkSjosm3a1IvgjW2eOKxDZqMM0U6Cnpi+Ocz9IFgq9jN4dtRcasePBbGupkQInbL6TtLlP5tW9RkEr2nsGYYElfRlF6HxDJJ0Ud5uOlp+qRsySNE/ebjpafqmc3kJ8Kr9LLy4o7TKfeK3Q1fVZAeG185PmUu8Vuhq+qyBN75z2i7rylgT4am1fUobjNH84WnTQ9pqTbZo/nC16aHtLLfZexm1rr3ctj4Mm4AGvOKAAAAAABHGlSONW2+hV9aBI5Huk5Y1Lfo6vpieOWKry7g/+RHz/ANWcJGB61C9GB61CrOsdNEknRwsLL+NU9ETZ51/AbroZGu0efA300/QjZ5zrGyuV+xkSxlfSv8Dm6381/wCX1IejArqF+MCuoa7pTqztdGlwtSvR3qcaiXI0k/QjsbuiqtOdN8E4Sj1rAi7NfKH5JdQm9kJe91Povf14ErRae1cD2pl6zTU4XajmMK0nC0Y/ey+ayMg26tpUak6U1hKM5QafIy1qki565tSrP8qt441EvfILhkl8ZcpH0k08GsGtjT2NMrzbpyuZ0dktUbRTU459K1P8zFlxPMol9luZlGqWkYs0S9mBk929jDWWEqrdVrfg+DzHG5o5rTu6ka1WLjQhJSbaw7I0+5XJykrQiopJLBJYJcSLdNuSvNBhq1xaVCL03vw1LmabPG6VGxryfDKnKmueSwIUJA0nZXUtSyg8cHr1cN0/ix9pwJLFl3A9B07PjP5nf5aOfmeWSToo7zcdLT9Ujdkk6KO83HS0/VMpMywsv0kvLidllPvFboKvqsgTe+cnrKfeK3QVvVZAu9857T0lDAfwVNq+p6Ntmj8Ptemh7TUm3zS+H2vTwLF+Rm2r/tT2PgybAAUziAAAAAAAcDpKWNS3+hU9MTvjhNIy98ofQq+mJDaHdTb/ADOXcHfyY+f+rONURql5RGoaiVQ6dEgaPvgjXFWn6EbbL6xtLhfsanoNLo+n7zVjxVE+tfcdBlKGtQrR46NVf/LNpReNQT8DmrU8W2N/2X0IihE9ah7jEuapoekOqecxpQO2zRzhWCtrh4NbKVSTwTXgt8ZyWqeHAko2l05XogtFCFop4k/J6iYjTZUzdtLt61SnhN/pKb1ZPn4zlsj51VrdKnWTq01sTb7eK5951NpnJZVeCqoPwanas3ELTRrK5+jOdnY7VZpY0L8mmN//AE0tTR/Qb2VqiXE4RfnM7J+ZljRak4yqtcHZGtXHmRvFe0Ht7LS+siYt1lyzpd3Xp8yes31Eip0Y5cgdsttXs40ns+yNhCKikkkktiS2JI0mc+cNOxptJp1pLtIY8H60uJGjyxnxscLWD27Oy1Fwcqj9pxN1WnVk6lSUpzk8XKTxbMJ2mOaJbsWCJSeNXyLVpe3Ut5iXVSdWcqlRtzm3KUnwtsx5RMuUSzKJ7TqHTosskrRTH3iu+OrH1CNJIlPRhS1bOU38evLDmUYlm81mGXdZX4tHS5XeFvXf7Ct6jIGW/nZOWctTUsrmT3UJ+dYEHIzgVMBr3dR+K4Hs22aPw+26eHtNObjND4fbdPD2k2hm0r/tT2PgybAAVjhwAAAAAAcPpCWNS3+hU9MTuDjc/oYyovkmvOirbXdRl5cUXcHfyI+fBnIRietU9xgXFA5+Uzpbzf5iV9StUpP48E1zx+47hrHY95GFhWlQqwqx4YST51vRJdCtGpCM4PGMkmnyG4wZWUoOGmPB/c0OFaV1RTWaXFfYjHK9k7e4qU2tmu5R5Yt4ox1EkHOHIqu4qUcFVgu1e6S8FnE1bWdOThUi4yXCmau2UJUZ/wBXm5bTbWO1xrU13ln57DG7GeXAyVAOmVEyzjmJKBZlAz3TLcqZmpEimYLgjy4GVKBalEkjIkU2Y0oluUTIki3NFmEzNMx5IszRkTLU1jsW1vYktrZcpzMllMZwbaili20klvbJrzbsPyW1o0X3UYJz+m9rOTzKzTkpRu7qPBhKlSlw4+FJegkE2NO+69nN4ZtkarVGDvUcrfj9jldIt6qVlKCfbVZxppca4WRIjqtIWWFc3PYoPGnQxgmuCU33T82ByxPE2uC6Do2eN+eWX1zbript80Ph9t08Paag3OZ0ccoW3JUi/SS6GWLR+1N+D4MmoAFc4YAAAAAAHL570cYUp8U5R60dQazOC17NbzS4VhNeIr2qDlRklqLFlniVoN6yPowLsYHuMC9Cmcs2dI5FhUjeZvZUdB9iqd7b2PwH9hr40z2qZlSqypSU450Q1VGpFwlmO7hJSSaaae1Nby1c2lKssKkIy51tXjOXsL6rQ2ReMfAltXi4jd2+W6Uu7UoPrRv6Vvo1VdPI9TzGkqWWpTd8cvis5YqZtW77lzhyJ4rzliWasN1WXjijdxu6MuCpDrR7VaD+NHykZ9Uss80V5Pkx1u0xyOT8znXmmvln5H3nl5ox+W/0/vOm7JHwo9aHZI+FHrQ6hZ+7vfM96/aO9uXI5Z5nJ/p/9P7y28ysf7w/q/vOt7JHwo9aKdlj4UetHvUaHd3vmZLCVp725cjkXmMn/eH9X95RZh099efippe06/s0PCj5SPLuKa4Z0/KRkrHQWje+Z77StXe3LkcvSzDtV3dSrLkWrFG4ydkCztttKlHHw5dvLrZlVcpW8Ns61GPPUiau9zusaWKU3VfFSWt5+AzSo08uRHrqW20LF7TT9N2Q6A4vPTOqNCMra3knWknGco7exp4rBYfGNLlvPO4rpworsNN7HqvGo1z7jkprj53ynnTqWSJsrDgi6SnX0Zo8+XqY7ZRnqaKFuGY6Bg6XR/R17+m90ISm/EvvOaJC0W2D99uWtjSowfH3Mpewzb7LKGEKihZpt6Vd65CQQAQnGAAAAAAAoyoAOMytk7sFR4LtJNuL9hjRgdpdW0a0XCS5nvT4znLixnReElit0lwM5622N0pOUfhe429ntWPHFedbzDjAuKmXYwLigUcUncywqZXsZkKBXUPcUjxzGdIo6RlahRwPMRHqqMxHTPEoPlMxwPEoDERmqjMCVN8pZnTfKbCUCzOAxUSxqs1tSHOYtWkbWpTMapTM0i1Cq9ZqKlEw6lM3FWBg1oFmmy1Cpea6SLM0ZdWJjTRsKTJ0zHmi0XZo9WdlVuJqlShKUpPBRisfG+JGzpZjJtLKxYWdS4qwpU05Sk8EvaTbkXJsLShTt4cEI7X4Ut7NRmjmxCwhr1MJV5LtpcKgvBidMZSlecnhO3KvJQh8K3vloQABiasAAAAAAAAAHicFJYSSa4mewGDW1slxe2Dw5HtRjyyfUW5PmaN0CnOwUZZUrtnImVomvE0n5JU8HzFPyafgvqN4CL2bDvPdyMusy1Gj/Jp+DLqKfk0/BfUb0D2bDvPcOsvUaF2s/AfUzw7Sp4D6mdCDz2ZDvPce9alqOalZ1PAfkstysavyc/JZ1IHsyHee4zVsktCOPnk+t8nPyWY9TJtf5Kp5DO4A9mQ7z3EiwhJfKt5H1TJVx8jV8hmLVyNdvgt6vkSJLBksHxXzPcSrCs18qIoqZAvXwW9XyJI8wzSv6nBRcVxznGOHnJZBPCyxjpZn7ZqpdmKXrzI9yfo9k2nc1klvhSWs3/mZ2WSsj21pHVoU1Hjlwzlzs2ALCSRRtFtrV8k5ZNWZegAB6VQAAAAAAUKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAACoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z';
  //   let res = await fetch(img);
  //   let blob = await res.blob();
  //   console.log('did', did);
  //   let metadata = await nftArcana.makeMetadataURL(
  //     'Random title',
  //     'Test description about nft',
  //     did,
  //     new File([blob], 'logo.png', { type: 'image/png' }),
  //   );
  //   console.log(metadata);
  // });
  
  // it("Should link nft", async ()=> {
  //   let 
  //     chainId = 80001,
  //       tokenId  = 3,
  //       nftContract = "0xE80FCAD702b72777f5036eF1a76086FD3f882E29"

  //   let tx = await arcanaInstance.linkNft(did, tokenId, nftContract, chainId);
  //   chai.expect(true).to.be.true;
  // })

  // it('Fail download tranaction', async () => {
  //   receiverWallet = await arcana.storage.utils.getRandomWallet();
  //   console.log('Receiver wallet address', receiverWallet.address);
  //   sharedInstance = new arcana.storage.StorageProvider({
  //     appId,
  //     privateKey: receiverWallet,
  //     email: makeEmail(),
  //     gateway,
  //     debug,
  //   });
  //   let download = await sharedInstance.getDownloader();
  //   try {
  //     await download.download(did);
  //     throw Error('should throw an error');
  //   } catch (err) {
  //     chai.expect(err.code).equal('UNAUTHORIZED');
  //     chai.expect(err.message).equal('You cant download this file');
  //   }
  // });

  // it('Fail revoke transaction', async () => {
  //   let access = await sharedInstance.getAccess();
  //   try {
  //     await access.revoke(did, receiverWallet.address);
  //     throw Error('should throw an error');
  //   } catch (err) {
  //     chai.expect(err.code).equal('TRANSACTION');
  //     console.log(err.message);
  //     // chai.expect(err.message).equal('This function can only be called by file owner');
  //   }
  // });

  // it('Should skip uploading same file', async () => {
  //   let upload = await arcanaInstance.getUploader();
  //   upload.onSuccess = () => {
  //     console.log('Skip file upload');
  //   };
  //   try {
  //     did = await upload.upload(file);
  //     throw new Error('');
  //   } catch (e) {
  //     chai.expect(e.message.includes('File is already uploaded')).is.true;
  //   }
  // });

  // it('My files', async () => {
  //   let files = await arcanaInstance.myFiles();
  //   chai.expect(files.length).equal(file_count);
  //   chai.expect(files[0]['did']).equal(did.substring(2));
  //   chai.expect(files[0]['size']).equal(file.size);
  // });

  it('Share file', async () => {
    access = await arcanaInstance.getAccess();
    let tx = await access.share([did], ["0xd018E133CeF28AE3F4F27b16F1AB43BBdd53BDcb"], [150]);
    chai.expect(tx).not.null;
  });


  it('Should download a file', async () => {
    let download = await arcanaInstance.getDownloader();
    download.onSuccess = () => {
      console.log('Download completed');
    };
    download.onProgress = (a, b) => {
      console.log(a, b);
    };
    console.log(did)
    await download.download(did);
  });

  
  it('Shared users', async () => {
    // chai.expect((await access.getSharedUsers(did))[0]).equal(receiverWallet.address);
    // chai.expect((await access.getSharedUsers(did)).length).equal(1);
  })
  

  // it('Download shared file', async () => {
  //   let download = await sharedInstance.getDownloader();
  //   await download.download(did);
  // });

  // it('Files shared with me', async () => {
  //   let files = await sharedInstance.sharedFiles();
  //   chai.expect(files.length).equal(1);
  //   chai.expect(files[0]['did']).equal(did.substring(2));
  //   chai.expect(files[0]['size']).equal(file.size);
  // });

  // it('Revoke', async () => {
  //   let before = await access.getSharedUsers(did);
  //   let tx = await access.revoke(did, receiverWallet.address);
  //   let after = await access.getSharedUsers(did);
  //   chai.expect(before.includes(receiverWallet.address)).is.true;
  //   chai.expect(after.includes(receiverWallet.address)).is.false;
  //   chai.expect(before.length - after.length).equal(1);
  //   let files = await sharedInstance.sharedFiles();
  //   chai.expect(files.length).equal(0);
  //   chai.expect(tx).exist;
  // });

  // it('Change File Owner', async () => {
  //   access = await arcanaInstance.getAccess();
  //   let newOwner = '0x04efC2A7E86cBaD7e5e65fc60eedfa92A413890e';
  //   let tx = await access.changeFileOwner(did, newOwner);
  //   chai.expect(tx).not.null;
  //   alert(`Change Metamask Account to ${newOwner}`);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  //   let newOwnerInstance = new arcana.storage.StorageProvider({
  //     appId,
  //     provider: window.ethereum,
  //     email: makeEmail(),
  //     gateway,
  //     debug,
  //   });
  //   let files = await newOwnerInstance.myFiles();
  //   chai.expect(files.length).equal(1);
  //   // files = await arcanaInstance.myFiles();
  //   // chai.expect(files.length).equal(0);
  // });

  // it('Get consumed and total upload limit', async () => {
  //   const Access = await arcanaInstance.getAccess();
  //   let [consumed, total] = await Access.getUploadLimit(did);
  //   chai.expect(consumed).equal(file.size);
  // });

  // it('Delete File', async () => {
  //   let files = await arcanaInstance.myFiles();
  //   chai.expect(files.length).equal(1);
  //   chai.expect(files[0].did).equal(did.replace('0x', ''));
  //   let tx = await access.deleteFile(did);
  //   files = await arcanaInstance.myFiles();
  //   chai.expect(files.length).equal(0);
  //   chai.expect(tx).not.null;
  // });

  // it('Get consumed and total download limit', async () => {
  //   const Access = await sharedInstance.getAccess();
  //   let [consumed, total] = await Access.getDownloadLimit(did);
  //   chai.expect(consumed).equal(file.size);
  // });

  // it('Delete Account', async () => {
  //   const Access = await sharedInstance.getAccess();
  //   await Access.deleteAccount();
  //   chai.expect(await Access.getAccountStatus()).equal(2);
  // });
});

// describe('Negative testing', () => {
//   let file,
//     appId = 1001;
//   before(() => {
//     file = MockFile('aaaaaaaaaaaaa.txt', 2 ** 2, 'image/txt');
//     file = new File([file], file.name, { type: file.type });
//   });

//   it('Should return correct error for invalid app', async () => {
//     let arcanaInstance = new arcana.storage.StorageProvider({
//       appId,
//       provider: window.ethereum,
//       email: makeEmail(),
//       gateway,
//       debug,
//     });

//     await arcanaInstance.login().catch(() => {
//       chai.expect(true).is.true;
//     });
//   });
// });
