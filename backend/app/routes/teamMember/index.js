const router = require('express').Router({ mergeParams: true });
const multer = require('multer');
const updateTeamMember = require('./updateTeamMember')
const addTeam = require('./addTeam');
const deleteTeamMember = require('./deleteTeamMember');
const { authMiddleware } = require('../../../helpers/middlewares/auth');

const upload = multer({ dest: 'uploads/teamMembersProfile' });

router.post('/addTeamMember', authMiddleware, upload.single('image'), addTeam);
router.put('/updateTeamMember',authMiddleware,upload.single('image'),updateTeamMember);
router.delete("/deleteTeamMember",authMiddleware,deleteTeamMember);
module.exports = router;
