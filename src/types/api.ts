export type ApiFieldError = {
  field: string;
  message: string;
};

export type ApiSuccessResponse = {
  success: true;
  code: string;
  message: string;
};

export type ApiErrorResponse = {
  success: false;
  code: string;
  message: string;
  errors?: ApiFieldError[];
};

export type HealthResponse = {
  success: true;
  status: "ok";
};
