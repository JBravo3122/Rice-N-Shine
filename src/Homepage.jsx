import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Homepage.css";
import VideoThumbnail from "./assets/RiceNShineVideoThumbnail.png";
import { supabase } from "./supabaseclient.js";
import { motion, AnimatePresence } from "framer-motion";

function Homepage() {
  const navigate = useNavigate();
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  // Animation for video section
  const videoSectionRef = useRef(null);
  const [videoInView, setVideoInView] = useState(false);

  // Animation for Filipino Food Staples section
  const staplesSectionRef = useRef(null);
  const [staplesInView, setStaplesInView] = useState(false);

  // Animation for Featured Recipes heading
  const featuredHeadingRef = useRef(null);
  const [featuredHeadingInView, setFeaturedHeadingInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStaplesInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (staplesSectionRef.current) {
      observer.observe(staplesSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturedHeadingInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (featuredHeadingRef.current) {
      observer.observe(featuredHeadingRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchSlides = async () => {
      const { data, error } = await supabase
        .from("recipes")
        .select("recipe_id, recipe_name, pictures(path)")
        .in("recipe_id", [3, 9, 11, 28]); 
      
      if (error) {
        console.error("Error fetching recipes:", error);
      } else {
        const formattedSlides = data.map(recipe => ({
          id: recipe.recipe_id, 
          title: recipe.recipe_name,
          image: recipe.pictures?.[0]?.path || "", 
        }));
        setSlides(formattedSlides);
      }
    };

    fetchSlides();

    const fetchFeaturedRecipes = async () => {
      const { data, error } = await supabase
        .from("recipes")
        .select(`
          recipe_id,
          recipe_name,
          region:regions(region_name),
          pictures(path)
        `)
        .in("recipe_id", [5, 8, 29]); 
    
      if (error) {
        console.error("Error fetching featured recipes:", error);
      } else {
        const formatted = data.map(recipe => ({
          id: recipe.recipe_id,
          name: recipe.recipe_name,
          image: recipe.pictures?.[0]?.path || "",
          region: recipe.region?.region_name || "Unknown"
        }));
        setFeaturedRecipes(formatted);
      }
    };
    
    fetchFeaturedRecipes();
  }, []);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    if (slides.length > 0) startAutoSlide();
    return () => clearInterval(slideInterval.current);
  }, [slides]);

  const resetTimer = () => {
    clearInterval(slideInterval.current);
    startAutoSlide();
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  return (
    <>
       <div className="homepage-featured-recipes">
        <motion.h2
          ref={featuredHeadingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={featuredHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          FEATURED RECIPES
        </motion.h2>
        <div className="homepage-slider">
          <button
            onClick={handlePrev}
            className="homepage-slider-button homepage-prev"
          >
            ❮
          </button>

          {slides.length > 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentSlide].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="homepage-slide">

                <div className="homepage-slide-content">
                  <h3>{slides[currentSlide].title}</h3>
                  <p>Discover this delicious recipe!</p>
                  <button className="homepage-view-recipe" onClick={() => navigate(`/recipepage/${slides[currentSlide].id}`)}>View Recipe</button>
                </div>
                <div
                  className="homepage-slide-image"
                  style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </motion.div>
            </AnimatePresence>
          )}

          <button onClick={handleNext} className="homepage-slider-button homepage-next">❯</button>
        </div>
        <div className="homepage-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`homepage-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => {
                setCurrentSlide(idx);
                resetTimer();
              }}
            ></span>
          ))}
        </div>
      </div>

      <div className="homepage-check-video" ref={videoSectionRef}>
        <motion.img
          className="homepage-secondslide-video"
          src={VideoThumbnail}
          alt="Video Thumbnail"
          initial={{ opacity: 0, y: 50 }}
          animate={videoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        />
        <motion.div
          className="homepage-videocontent"
          initial={{ opacity: 0, x: 50 }}
          animate={videoInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3>Check Out <br />Our Video</h3>
          <motion.button
            className="homepage-watch-video"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={videoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={() => navigate("/homepage-video")}
          >
            Watch Now
          </motion.button>
        </motion.div>
      </div>

      <div className="homepage-three-recipes" ref={staplesSectionRef}>
        <motion.h3
          className="homepage-recipes-title"
          initial={{ opacity: 0, y: 40 }}
          animate={staplesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="homepage-recipes-icon">🍽</span> FILIPINO FOOD STAPLES
        </motion.h3>
        <div className="homepage-recipes-container">
          {featuredRecipes.map((recipe, index) => (
            <motion.div
              key={index}
              className="homepage-recipe-card"
              onClick={() => navigate(`/recipepage/${recipe.id}`)}
              style={{ cursor: "pointer" }}
              initial={{ opacity: 0, y: 60 }}
              animate={staplesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
            >
              <div
                className="homepage-recipe-image"
                style={{
                  backgroundImage: `url(${recipe.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px 10px 0 0"
                }}
              ></div>
              <div className="homepage-recipe-info">
                <h4>{recipe.name}</h4>
                <p>{recipe.region}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;


