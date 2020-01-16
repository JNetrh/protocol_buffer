const testController = async (req, res) => {
    try {
      // await saveDocumentInfo(req.files, { TaskId: createdTask.id });
      return res.json({test: "passed"});
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  export default testController