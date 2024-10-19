import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await googleSignIn();
      console.log(user);
      const userInfo = { name: user?.displayName, email: user?.email };
      const { data } = await axiosPublic.post("/users", userInfo);
      console.log(data);
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        confirmButtonText: "Okay",
      });
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-block">
      <FcGoogle className="text-xl" />
      Continue with Google
    </button>
  );
};

export default SocialLogin;
