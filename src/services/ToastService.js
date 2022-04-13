import { toast } from "react-toastify";

export function synchronizeWorkoutsToast(promise) {
  toast.promise(promise, {
    pending: "Synchronizing workouts",
    success: "Workout successfully synchronized!",
    error: "An error occurred, please try again later",
  });
}

export function createWorkoutToast(promise) {
  toast.promise(promise, {
    pending: "Creating a workout",
    success: "Successfully created a workout",
    error: "An error occurred, please try again later",
  });
}

export function editWorkoutToast(promise) {
  toast.promise(promise, {
    pending: "Applying workout changes",
    success: "Successfully edited a workout",
    error: "An error occurred, please try again later",
  });
}

export function deleteWorkoutToast(promise) {
  toast.promise(promise, {
    pending: "Deleting a workout",
    success: "Successfully deleted a workout",
    error: "An error occurred, please try again later",
  });
}

export function addExerciseToWorkoutToast(promise) {
  toast.promise(promise, {
    pending: "Adding an exercise to a workout",
    success: "Successfully added a new exercise to your workout",
    error: "An error occurred, please try again later",
  });
}

export function copyToClipboardToast(promise) {
  toast.promise(
    promise,
    {
      pending: "Copying to clipboard",
      success: "Successfully copied to clipboard",
      error: "An error occurred, please try again later",
    },
    {
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      autoClose: 5000,
    }
  );
}

export function singUpToast(promise) {
  toast.promise(
    promise,
    {
      pending: "Loading",
    },
    {
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      autoClose: 5000,
    }
  );
}

export function resetPasswordToast(promise) {
  toast.promise(
    promise,
    {
      pending: "Loading",
    },
    {
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      autoClose: 5000,
    }
  );
}

export function requestVerificationToken(promise) {
  toast.promise(
    promise,
    {
      pending: "Sending an email",
    },
    {
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      autoClose: 5000,
    }
  );
}

export function requestResetPasswordToken(promise) {
  toast.promise(
    promise,
    {
      pending: "Sending an email",
    },
    {
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      autoClose: 5000,
    }
  );
}
