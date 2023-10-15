package com.kostdoktorn;

import androidx.test.runner.AndroidJUnitRunner;
import android.os.Bundle;

import com.linkedin.android.testbutler.TestButler;

class DetoxTestAppJUnitRunner extends AndroidJUnitRunner {
   @Override
   public void onStart() {
      TestButler.setup(getTargetContext());
      super.onStart();
   }

   @Override
   public void finish(int resultCode, Bundle results) {
      TestButler.teardown(getTargetContext());
      super.finish(resultCode, results);
   }
}
