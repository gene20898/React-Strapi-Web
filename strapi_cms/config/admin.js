module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b00af3414d23dd0116b76c86d49e79ae'),
  },
});
