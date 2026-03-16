const signIn = async (req, res) => {
  let result = await authService.signIn(req.user.id, req.body);

  res.json(result);
};

const authController = {
  signIn,
};

module.exports = authController;
