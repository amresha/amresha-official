const React = require('react')
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="gatsby-plugin-hotjar"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        var flkty = new Flickity(".main-gallery", {
            cellAlign: "left",
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            autoPlay: 5000
          });
        `,
      }}
    />
  ])
}