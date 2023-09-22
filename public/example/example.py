def prepend_path(self, name: str, paths: List[str]) -> None:
  old_val = self.env.get(name)
  paths = [p for p in paths if isdir(p)]
  if not paths:
      return
  if old_val is not None:
      new_val = ':'.join(itertools.chain(paths, [old_val]))
  else:
      new_val = ':'.join(paths)
  self.env[name] = new_val
