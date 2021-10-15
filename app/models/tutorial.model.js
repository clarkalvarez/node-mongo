module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      department: String,
      position: String,
      image: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("employee", schema);
  return Tutorial;
};