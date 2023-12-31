async function trackEvent(
  eventName,
  eventCategory,
  eventLabel,
  hostname,
  pathname
) {
  console.log("Tracking Event:", eventName, eventCategory, eventLabel);
  try {
    const response = await fetch("http://127.0.0.1:3033/tracker/listen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName,
        eventCategory,
        eventLabel,
        hostname,
        pathname,
      }),
    });
    const data = await response.json();
    if (data.code === true) {
      console.log("tracker send successfully", data);
    }
  } catch (error) {
    console.error("Error sending event:", error);
  }
}

document.querySelectorAll("button").forEach((btn) => {
  console.log("btn 0", btn.textContent.trim().replace(/\s+/g, "_"));
  if (
    btn.textContent.trim().replace(/\s+/g, "_") ===
    "New_Update:_Milir_UI_Dashboard_PROA_new_update_for_your_downloaded_item_is_available!"
  ) {
    console.log("btn 0.1", btn.textContent.trim().replace(/\s+/g, "_"));
    btn.addEventListener("click", function () {
      trackEvent(
        "ButtonClicked_1",
        "Button",
        "New Update: Milir UI Dashboard PROA new update for your downloaded item is available!",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (
    btn.textContent.trim().replace(/\s+/g, "_") ===
    "New_Update:_Milir_UI_Dashboard_PROA_new_update_for_your_downloaded_item_is_available!"
  ) {
    console.log("btn 0.2", btn.textContent.trim().replace(/\s+/g, "_"));
    btn.addEventListener("click", function () {
      trackEvent(
        "ButtonClicked_2",
        "Button",
        "New Update: Milir UI Dashboard PROA new update for your downloaded item is available!",
        "localhost",
        "/dashboard/default"
      );
    });
  }
});

document.querySelectorAll("a").forEach((anc) => {
  console.log("Anchor 1 :", anc.textContent.trim().replace(/\s+/g, "_"));
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Main_Dashboard") {
    console.log("Anchor 1.1 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_1",
        "Anchor",
        "Main Dashboard",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Users") {
    console.log("Anchor 1.2 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_2",
        "Anchor",
        "Users",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Profile") {
    console.log("Anchor 1.3 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_3",
        "Anchor",
        "Profile",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Pages_/") {
    console.log("Anchor 1.4 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_4",
        "Anchor",
        "Pages /",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Main_Dashboard") {
    console.log("Anchor 1.5 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_5",
        "Anchor",
        "Main Dashboard",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Main_Dashboard") {
    console.log("Anchor 1.6 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_6",
        "Anchor",
        "Main Dashboard",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Profile_Settings") {
    console.log("Anchor 1.7 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_7",
        "Anchor",
        "Profile Settings",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Newsletter_Settings") {
    console.log("Anchor 1.8 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_8",
        "Anchor",
        "Newsletter Settings",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Log_Out") {
    console.log("Anchor 1.9 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_9",
        "Anchor",
        "Log Out",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Support") {
    console.log("Anchor 1.10 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_10",
        "Anchor",
        "Support",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "License") {
    console.log("Anchor 1.11 :", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_11",
        "Anchor",
        "License",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Terms_of_Use") {
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_12",
        "Anchor",
        "Terms of Use",
        "localhost",
        "/dashboard/default"
      );
    });
  }
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Blog") {
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_13",
        "Anchor",
        "Blog",
        "localhost",
        "/dashboard/default"
      );
    });
  }
});

document.querySelectorAll("input").forEach((inpt) => {});

document.querySelectorAll("button").forEach((btn) => {
  console.log("sign up google 1 ", btn.textContent.trim().replace(/\s+/g, "_"));
  if (btn.textContent.trim().replace(/\s+/g, "_") === "Sign_up_with_Google") {
    console.log("sign up google 2 ", btn.textContent.trim().replace(/\s+/g, "_"));
    btn.addEventListener("click", function () {
      trackEvent(
        "ButtonClicked_1",
        "Button",
        "Sign up with Google",
        "localhost",
        "/auth/signup"
      );
    });
  }
});

document.querySelectorAll("a").forEach((anc) => {
  console.log("sign in  2 ", anc.textContent.trim().replace(/\s+/g, "_"));
  if (anc.textContent.trim().replace(/\s+/g, "_") === "Sign_in") {
    console.log("sign in  2 ", anc.textContent.trim().replace(/\s+/g, "_"));
    anc.addEventListener("click", function () {
      trackEvent(
        "AnchorClicked_1",
        "Anchor",
        "Sign in",
        "localhost",
        "/auth/signup"
      );
    });
  }
});

document.querySelectorAll("input").forEach((inpt) => {});
