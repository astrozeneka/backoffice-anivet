<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataListValidation
              title="PaymentReceipt"
              description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
              slug="paymentReceipt"
          >
            <template v-slot:head>
              <th scope="col">Reference</th>
              <th scope="col">Method</th>
              <th scope="col">Email</th>
              <th scope="col">File</th>
              <th scope="col">Upload date</th>
              <th scope="col">Status</th>
            </template>
            <template v-slot:default="entity">
              <td><a :href="`validate-payment-receipt.html?id=${entity.id}`">{{entity.reference}}</a></td>
              <td>{{entity.method}}</td>
              <td>
                <span v-if="entity.baseMember">{{entity.baseMember.email}}</span></td>
              <td class="downloadTd"><a href="#"><i class="fa fa-arrow-down"></i> Download</a></td>
              <td>
                -
              </td>
              <td>
                <span v-if="entity.validationNote">
                  <span v-if="entity.validationNote.validated" class="badge badge-pill badge-success">validated</span>
                  <span v-else class="badge badge-pill badge-warning">pending</span>
                </span>
              </td>
            </template>
          </DataListValidation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataListValidation from "../components/DataListValidation";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";

export default {
  name: "BOValidatePaymentReceiptList",
  components: {DataListValidation, BackofficeAsideMenu}
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/data-list.scss';

.downloadTd a{
  white-space: nowrap;
}
</style>
