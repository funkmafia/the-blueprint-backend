// this page is the reception desk !!

const router = express.Router();

router.get("/", handleNewMessage);
router.post("/", getAllMessages);
