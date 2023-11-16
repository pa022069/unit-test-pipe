export default function Page() {
  const temp1 = () => {
    return {
      var1: 1,
    };
  };
  const temp2 = () => {
    return {
      var2: 2,
    };
  };
  const temp3 = () => {
    return {
      var3: 3,
    };
  };
  const func = (_array: any[]) => {
    const obj = {};
    _array.forEach(item => {
      Object.keys(item).forEach(key => {
        obj[key] = item[key];
      });
    });
    return obj;
  };

  console.log('func', func([temp1(), temp2(), temp3()]));

  return <div>Index Page</div>;
}
