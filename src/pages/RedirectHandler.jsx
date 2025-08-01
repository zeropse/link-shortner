import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RedirectHandler = () => {
  const { redirectlink } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Redirecting...";
  }, []);

  useEffect(() => {
    if (!redirectlink) return;
    const mappings = JSON.parse(localStorage.getItem("urlMappings") || "{}");
    const originalUrl = mappings[redirectlink];
    if (originalUrl) {
      window.location.replace(
        originalUrl.startsWith("http") ? originalUrl : `https://${originalUrl}`
      );
    } else {
      navigate("/not-found", { replace: true });
    }
  }, [redirectlink, navigate]);

  return null;
};

export default RedirectHandler;
