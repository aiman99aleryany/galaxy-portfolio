import Handler from 'handlers/Handler';

function Lang() {
  return null;
}

const mod = {
  f: Lang,
  fn: 'Lang',
  handler: Handler.Type.Default.log,
};

export default new Handler.Wrapper(mod).sync.wrap();
