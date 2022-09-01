import { ModelManager } from '../lib/model-manager';

function checkSchema(req, res, next) {
  const tenant = req.header('x-tenant');
  if (tenant === undefined) {
    console.log('undefined tenant');
    next();
    return;
  }

  const tenantModel = ModelManager.get(tenant);
  console.log(tenantModel);
  if (!tenantModel) {
    ModelManager.set(tenant, `${tenant} model`);
    console.log(`new model created: ${ModelManager.get(tenant)}`);
  }
  next();
}

export default checkSchema;