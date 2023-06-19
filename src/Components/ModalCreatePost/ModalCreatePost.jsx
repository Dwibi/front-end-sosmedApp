import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 375,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function ModalCreatePost(props) {
  // const [image, setImage] = useState(null);
  const formik = useFormik({
    initialValues: {
      image_post: "",
      caption: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.caption) {
        errors.caption = "Required!";
      }
      return errors;
    },
    // validationSchema: Yup.object({
    //   caption: Yup.string().required("Required!"),
    // }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const ImageHandler = (e) => {
    formik.setFieldValue("image_post", e.target.files[0]);
    // let image = URL.createObjectURL(e.target.files[0]);
    // console.log(image);
  };

  console.log(formik.values);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="create-post"
        aria-describedby="create-post"
      >
        <Box sx={style}>
          <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
            {formik.values.image_post ? (
              <label
                htmlFor="image_post"
                className="cursor-pointer flex justify-center"
              >
                <img
                  className="object-contain max-h-[300px]"
                  src={URL.createObjectURL(formik.values.image_post)}
                  alt="image_post"
                />
              </label>
            ) : null}
            <label
              className={
                formik.values.image_post
                  ? "hidden"
                  : "p-3 bg-blue-500 text-white font-bold cursor-pointer"
              }
              htmlFor="image_post"
            >
              Pick image from your computer
            </label>
            <input
              className="hidden"
              id="image_post"
              name="image_post"
              type="file"
              accept="image/jpeg, image/png, image/jpg"
              onChange={(e) => ImageHandler(e)}
              // value={formik.values.image_post}
            />
            {formik.values.image_post ? (
              <>
                <TextField
                  fullWidth={true}
                  id="outlined-multiline-static caption"
                  label="Caption"
                  multiline
                  rows={4}
                  max
                  name="caption"
                  inputProps={{ maxLength: 255 }}
                  onChange={formik.handleChange}
                  value={formik.values.caption}
                />
                <p className="text-[#737373] text-[12px]">{`${formik.values.caption.length}/255`}</p>
                <LoadingButton
                  className="!bg-[#1877f2] !rounded-lg"
                  type="submit"
                  // loading={registerLoad}
                  loadingIndicator="Loading…"
                  variant="contained"
                >
                  <span className="font-bold">Create Post</span>
                </LoadingButton>
              </>
            ) : null}
          </form>
        </Box>
      </Modal>
    </div>
  );
}
