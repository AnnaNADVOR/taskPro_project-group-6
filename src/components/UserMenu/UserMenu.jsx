import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import * as Yup from "yup";
import { useState, useRef, useEffect } from "react";
import { updateUser } from "../../redux/user/operation";
import { Field, Formik, Form, ErrorMessage } from "formik";
import sprite from '../../assets/images/sprite.svg';
import styles from './UserMenu.module.css'

const UserMenu = ({ selectedTheme, handleClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const inputFileRef = useRef(null); 

  // const [showPassword, setShowPassword] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(user.user.avatarURL);
  const [fileImage, setFileImage] = useState(null);
  
  const initialValues = {
    avatarURL: currentImageUrl,
    name: user.user.name,
    email: user.user.email,
    password: '',
    showPassword: false
  };

  useEffect(() => {
    if (fileImage) {
      const reader = new FileReader();

      reader.onload = event => {
        setCurrentImageUrl(event.target.result);
      };

      reader.readAsDataURL(fileImage);
    }
  }, [fileImage]);

  const handleImageUpload = event => {
    setFileImage(event.target.files[0]);
  };

  // const handleTogglePassword = () => setShowPassword(!showPassword);

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => (
          <p >
            {message}
          </p>
        )}
      />
    );
  };


  const handleSubmit = async (values) => {
    const { name, email, password } = values;
  
    let formData = new FormData();
  
    formData.set('name', name);
    formData.set('email', email);
  
    if (password) formData.set('password', password);
    if (fileImage) formData.set('avatar', fileImage);
  
    await dispatch(updateUser(formData));
  
    handleClose()
  }

  const changeImage = () => {
    if (currentImageUrl === '') {
      return user.user.avatarURL;
    }

    return currentImageUrl;
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
             .min(2,"The name must be longer than 2 letters")
             .required("Name is required"),
    email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
    password: Yup.string()
                .min(8, "Password must be at least 8 characters"),
  });

  let iconId;

  switch (selectedTheme) {
    case 'dark':
      iconId = '#default-user-icon-dark-68';
      break;
    case 'light':
      iconId = '#default-user-icon-light-68';
      break;
    case 'violet':
      iconId = '#default-user-icon-violet-68';
      break;
    default:
      iconId = '#default-user-icon-dark-68';
  } 
  
  return (
    <>
      <p className={styles.title}>Edit profile</p>
      
      <div className={styles.imgWrap}>
    {currentImageUrl ? (
      <img src={changeImage()} alt="user" className={styles.userImg} />
    ) : (
      <svg className={styles.userIcon}>
        <use href={sprite + iconId} />
      </svg>
    )}
      <button
        className={styles.userBtn}
        onClick={() => {
          if (inputFileRef.current) {
            inputFileRef.current.click();
          }
        }}
      >
        <svg className={styles.iconPlus}>
          <use href={sprite + '#plus-20'} />
        </svg>
      </button>

      <input
        ref={inputFileRef}
        className={styles.hiddenInput}
        type="file"
        accept="image/*"
        name="imageURL"
        onChange={handleImageUpload}
      />
    </div>

    <Formik
            autoComplete="off"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors }) => (
              <Form className={styles.form}>
                <div className={styles.wrap}>
                  </div>
                  <div className={styles.formWrapper}>
                    <Field
                      className={styles.input}
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                    {errors.name && <FormError name="name" style={{ color: "#red" }} />}
                  </div>
                  <div className={styles.formWrapper}>
                    <Field
                      className={styles.input}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    {errors.email && <FormError name="email" style={{ color: "#bedbb0" }}/>}
                  </div>
                  <div className={styles.formWrapper}>
                    <Field
                      className={styles.input}
                      // type={showPassword ? 'text' : 'password'}
                      type={'password'}
                      name="password"
                      placeholder="Change password"
                    />
                    {/* <span className={styles.eye_icon} onClick={togglePassword}>
                      {passwordIcon}
                    </span>
                    {errors.password && <FormError name="password" style={{ color: "#bedbb0" }}/>} */}
                  </div>
                  <button
                    className={styles.submitBtn}
                    type="submit"
                  >
                  Send
                  </button>
                </Form>
            )}
          </Formik>
    </>
  )
}

export default UserMenu;