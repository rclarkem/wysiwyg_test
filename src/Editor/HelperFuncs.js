// Add active classes to the editor by using these funcs and useRef in MyEditor

export const getLabel = (ref) => {
  const ts = ref.current.wrapper;
  const class_name = ts.className;
  ts.classList.add('active');
};

export const removeLabel = (ref) => {
  const ts = ref.current.wrapper;
  ts.classList.remove('active');
};
