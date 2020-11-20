module.exports = function(grunt) {
    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: "gm",
            sizes: [
              { name: "lqip", quality: 60, width: 20 },
              { name: "sm", suffix: "_1x", quality: 60, width: 600 },
              { name: "sm", suffix: "_2x", quality: 60, width: 1200 },
              { name: "md", suffix: "_1x", quality: 60, width: 900 },
              { name: "md", suffix: "_2x", quality: 60, width: 1800 },
              { name: "lg", suffix: "_1x", quality: 60, width: 1440 },
              { name: "lg", suffix: "_2x", quality: 60, width: 2880 }
            ]
          },
          files: [
            {
              expand: true,
              src: ["**/*.{jpg,png}"],
              cwd: "src/assets/images/src/",
              dest: "src/assets/images/dest/"
            }
          ]
        }
      },
      cwebp: {
        dynamic: {
          options: {
            q: 60
          },
          files: [
            {
              expand: true,
              cwd: "src/assets/images/dest",
              src: ["**/*.{jpg,png}"],
              dest: "src/assets/images/dest"
            }
          ]
        }
      }
    });
  
    grunt.loadNpmTasks("grunt-responsive-images");
    grunt.loadNpmTasks("grunt-cwebp");

    grunt.registerTask("default", ["responsive_images", "cwebp"]);
  };