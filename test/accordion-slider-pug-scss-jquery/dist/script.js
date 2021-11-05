jQuery.noConflict();
(function ($) {
  $(function () {
    slidesPlugin();

    function slidesPlugin(indexOfActiveSlide = 0) {
      const slider = $(".slider");
      const slides = $(".slide");
      const numberOfLastSlide = slides.length - 1;

      setActiveSlide(indexOfActiveSlide, slides);

      slides.click(function () {
        console.log("Mouse click:", this);

        indexOfActiveSlide = getOrderOfSlide($(this));

        setActiveSlide(indexOfActiveSlide, slides);
      });

      slider.on("wheel", function (event) {
        event.preventDefault();

        const mouseWheel = Math.sign(event.originalEvent.deltaY);

        const wheelDirection = mouseWheel > 0 ? "up" : "down";
        const slideDirection = mouseWheel > 0 ? "right" : "left";

        console.log(`Mouse wheel: scroll ${wheelDirection}`);

        changeSlide(slideDirection, numberOfLastSlide, slides);
      });

      function changeSlide(direction, numberOfLastSlide, slides) {
        switch (direction) {
          case "right":
            indexOfActiveSlide++;
            if (indexOfActiveSlide > numberOfLastSlide) {
              indexOfActiveSlide = 0;
            }
            break;
          case "left":
            indexOfActiveSlide--;
            if (indexOfActiveSlide < 0) {
              indexOfActiveSlide = numberOfLastSlide;
            }
            break;
        }

        setActiveSlide(indexOfActiveSlide, slides);
      }

      function setActiveSlide(indexOfNewActivSlide, slides) {
        clearActiveClasses(slides);

        slides.each(function () {
          if (getOrderOfSlide($(this)) === indexOfNewActivSlide) {
            $(this).addClass("slide_active");
          } else {
            $(this)
              .find(".slide__caption")
              .addClass("slide__caption_visuall-hidden");
          }
        });

        console.log("Active slide index:", indexOfNewActivSlide);
        console.log("===================================");
      }

      function getOrderOfSlide(slide) {
        return slide.data("index");
      }

      function clearActiveClasses(slides) {
        slides.each(function () {
          $(this).removeClass("slide_active");

          $(this)
            .find(".slide__caption")
            .removeClass("slide__caption_visuall-hidden");
        });
      }
    }
  });
})(jQuery);