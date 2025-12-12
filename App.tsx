// App.tsx
import React, { useState } from "react";

import RoleSelect from "./RoleSelect";
import Login from "./Login";
import SignupRole from "./SignupRole";
import Signup from "./Signup";

// Buyer Screens
import Home from "./Categories";
import CategoriesPage from "./CategoriesPage";
import Contact from "./Contact";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import AddressPage from "./AddressPage";
import PaymentPage from "./PaymentPage";
import OrderSuccess from "./OrderSuccess";

// Shared Screens
import Profile from "./Profile";
import EditUsername from "./EditUsername";
import ChangePassword from "./ChangePassword";

// Seller Screens
import SellerHome from "./SellerHome";
import UploadProduct from "./UploadProduct";
import EditProduct from "./EditProduct";

export type PageType =
  | "roleSelect"
  | "login"
  | "signupRole"
  | "signup"
  | "home"
  | "categories"
  | "contact"
  | "profile"
  | "editUsername"
  | "changePassword"
  | "cart"
  | "checkout"
  | "address"
  | "payment"
  | "orderSuccess"
  | "sellerHome"
  | "uploadProduct"
  | "editProduct";

export default function App() {
  const [selectedRole, setSelectedRole] =
    useState<"buyer" | "seller" | null>(null);
  const [username, setUsername] = useState("User123");

  const [page, setPage] = useState<PageType>("roleSelect");

  // BUYER CART + CHECKOUT ITEM
  const [cart, setCart] = useState<any[]>([]);
  const [checkoutItem, setCheckoutItem] = useState<any>(null);

  // GLOBAL PRODUCT LIST
  const [allProducts, setAllProducts] = useState<any[]>([]);

  // EDIT PRODUCT STATE
  const [editProduct, setEditProduct] = useState<any>(null);

  // ⭐ SELLER EARNINGS + ITEMS SOLD
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [itemsSold, setItemsSold] = useState(0);

  return (
    <>
      {/* ROLE SELECT */}
      {page === "roleSelect" && (
        <RoleSelect setPage={setPage} setRole={setSelectedRole} />
      )}

      {/* LOGIN */}
      {page === "login" && <Login setPage={setPage} role={selectedRole} />}

      {/* SIGNUP FLOW */}
      {page === "signupRole" && (
        <SignupRole setPage={setPage} setRole={setSelectedRole} />
      )}

      {page === "signup" && (
        <Signup
          setPage={setPage}
          role={selectedRole}
          setUsername={setUsername}
        />
      )}

      {/* ---------------- BUYER SCREENS ---------------- */}
      {selectedRole === "buyer" && (
        <>
          {page === "home" && (
            <Home
              setPage={setPage}
              cart={cart}
              setCart={setCart}
              setCheckoutItem={setCheckoutItem}
              allProducts={allProducts}
            />
          )}

          {page === "categories" && (
            <CategoriesPage setPage={setPage} cart={cart} />
          )}

          {page === "contact" && <Contact setPage={setPage} />}

          {page === "cart" && (
            <CartPage
              setPage={setPage}
              cart={cart}
              setCart={setCart}
              setCheckoutItem={setCheckoutItem}
            />
          )}

          {page === "checkout" && (
            <CheckoutPage setPage={setPage} item={checkoutItem} />
          )}

          {page === "address" && <AddressPage setPage={setPage} />}

          {page === "payment" && (
          <PaymentPage
            setPage={setPage}
            item={checkoutItem}
            totalEarnings={totalEarnings}
            setTotalEarnings={setTotalEarnings}
            itemsSold={itemsSold}
            setItemsSold={setItemsSold}
            cart={cart}
            setCart={setCart}
          />
          )}

          {page === "orderSuccess" && <OrderSuccess setPage={setPage} />}
        </>
      )}

      {/* ---------------- SELLER SCREENS ---------------- */}
      {selectedRole === "seller" && (
        <>
          {(page === "home" || page === "sellerHome") && (
            <SellerHome
              setPage={setPage}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              setEditProduct={setEditProduct}
              totalEarnings={totalEarnings}
              itemsSold={itemsSold}
            />
          )}

          {page === "uploadProduct" && (
            <UploadProduct
              setPage={setPage}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
          )}

          {page === "editProduct" && (
            <EditProduct
              setPage={setPage}
              editProduct={editProduct}
              setAllProducts={setAllProducts}
              allProducts={allProducts}
            />
          )}
        </>
      )}

      {/* ---------------- SHARED SCREENS ---------------- */}
      {page === "profile" && (
        <Profile setPage={setPage} username={username} role={selectedRole} />
      )}

      {page === "editUsername" && (
        <EditUsername
          setPage={setPage}
          username={username}
          setUsername={setUsername}
        />
      )}

      {page === "changePassword" && <ChangePassword setPage={setPage} />}
    </>
  );
}