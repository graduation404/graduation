package com.HearingApp;

import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.i18nmanager.I18nUtil;
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule
   * rendering of the component.
   */

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this, R.style.SplashScreenTheme, true);
    super.onCreate(savedInstanceState);
    // SoLoader.init(this, /* native exopackage */ false);
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    // sharedI18nUtilInstance.forceRTL(this, true);
    // sharedI18nUtilInstance.allowRTL(this, true);
  }

  // ...other code
  @Override
  protected String getMainComponentName() {
    return "graduation";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView
   * is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or
   * the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e.
      // React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
}
