// // Layout.js
import React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import RouterBreadcrumbs from "./RouterBreadcrumbs";

// const Layout = () => {
//   return (
//     <div>
//       {/* Your header, navbar, or other layout components here */}
//       <div>
//         <Header />
//         <Box
//           sx={{
//             display: "flex",
//           }}
//         >
//           <RouterBreadcrumbs />
//           <div style={{ border: "1px solid #1A202C" }}></div>
//         </Box>
//       </div>
//       <Box>
//         {/* This is the placeholder for rendering page content */}
//         <Outlet />
//       </Box>
//     </div>
//   );
// };

// export default Layout;
export default function Layout({ children }) {
  return (
    <section className={``}>
      <Header />
      <main
        style={{
          display: "flex ",
          width: "100%",
          justifyContent: "space-between",
        }}
        className={`main-section`}
      >
        <RouterBreadcrumbs />
        {children}
      </main>
      <style>
        {`
         .main-section {
          max-width: calc(100% - 260px)

        }
        // @media screen and (min-width: 1024px) {
        //   .main-section {
        //     max-width: calc(100% - 260px)

        //   }
        // }
        // @media screen and (min-width: 0px) and (max-width: 640px) {
        //   .main-section {
        //     max-width: 100%;
        //   }
        // }
        `}
      </style>
    </section>
  );
}
