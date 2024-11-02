async function f1() {
  return await Promise.reject(new Error("Whoops!"));
}
f1()