const utils = {
  mx: (value: string) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: string) => ({
    marginTop: value,
    marginBottom: value
  }),
  px: (value: string) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: string) => ({
    paddingTop: value,
    paddingBottom: value
  })
};

export { utils };
