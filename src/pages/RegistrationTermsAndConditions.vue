<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <RegistrationAsideMenu></RegistrationAsideMenu>
        </div>
        <div class="col-md-9">
          <div id="">
            <p>
              In order to continue, you should accept our terms and conditions
            </p>
            <div>
              <div class="overflow-auto" style="height: 60vh">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus accumsan arcu, eu feugiat magna molestie laoreet. Nam vitae lacus quam. Integer at lectus libero. Praesent cursus finibus risus in commodo. Praesent sagittis est eu convallis feugiat. Morbi bibendum pulvinar enim, sed tristique elit efficitur vitae. Proin accumsan nunc maximus, egestas enim et, vehicula orci. Curabitur nulla magna, hendrerit quis felis sit amet, pretium interdum diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vel odio feugiat, elementum lectus eleifend, auctor elit. Aenean nec purus sed felis egestas facilisis. Sed vel lacus tincidunt, scelerisque tortor et, venenatis purus. Donec ullamcorper et neque auctor dictum. Aliquam et nisi quis lacus accumsan sollicitudin sit amet ac lacus. Aenean in neque vitae ligula rutrum ornare a eget purus.

                </p>
                <p>Etiam commodo facilisis arcu, aliquam varius sapien. Morbi ultricies massa sit amet mollis vulputate. Donec commodo non enim nec vestibulum. Proin ac rutrum magna. Morbi pharetra laoreet ipsum at gravida. Nam fringilla, odio at elementum tristique, tellus lorem iaculis nisi, a consequat ligula mi nec orci. Sed a tellus lorem. Donec sollicitudin et sapien in consectetur. Cras tincidunt malesuada diam quis porttitor. Sed quam velit, egestas at fermentum eget, bibendum ut nisl. Donec purus mi, pretium eu iaculis et, dignissim a mi. Integer in nisl pharetra, laoreet dolor at, malesuada est. Cras molestie ornare ipsum. Maecenas hendrerit cursus metus ut cursus.

                </p>
                <p>Praesent eleifend ut ipsum scelerisque aliquam. Curabitur finibus tincidunt volutpat. Cras sapien mauris, pellentesque nec malesuada at, imperdiet nec purus. Maecenas vestibulum est quis lacus venenatis, sit amet eleifend augue facilisis. Integer imperdiet lectus eros, sed molestie nisl feugiat sed. Praesent in pulvinar urna. Integer bibendum tortor a ipsum porta facilisis. Nulla iaculis diam ac sem pellentesque, id tincidunt nisl auctor. Aliquam molestie arcu at elit viverra, nec placerat massa porttitor. Sed et arcu tincidunt, posuere lorem quis, gravida felis. Sed vitae consequat libero. Nulla eget accumsan neque, sed vestibulum diam. Nam imperdiet eget mi non interdum.

                </p>
                <p>Nulla ut eros sit amet elit aliquet tincidunt vitae ac augue. Maecenas efficitur malesuada odio a semper. Donec eu elit mi. Nullam nec risus feugiat, ultricies lorem sed, semper turpis. Praesent at interdum erat. Suspendisse ac tortor in lorem aliquam pellentesque vel nec nibh. Ut et nibh mattis, scelerisque nisl vel, pellentesque ligula. Phasellus ullamcorper ante sollicitudin aliquam vulputate. Morbi maximus luctus dolor id sollicitudin.

                </p>
                <p>Vivamus vestibulum magna ac lectus ultrices, eget aliquet velit laoreet. Vestibulum vitae turpis at tellus elementum tincidunt sit amet eu risus. Nunc in elit fermentum, rhoncus lorem non, commodo dolor. Donec a lacinia nulla, et vulputate metus. Cras pretium ullamcorper odio porttitor tincidunt. Nulla facilisi. Aenean quis urna non velit aliquam lacinia. Nullam sodales dolor et magna commodo accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                </p>
                <div class="p-3">
                  <RequestingButton @click="accept" :requesting="requesting">Accept</RequestingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestingButton from "../RequestingButton";
import SubmitButton from "../components/SubmitButton";
import sessionstorage from "sessionstorage";
import RegistrationAsideMenu from "../components/RegistrationAsideMenu";

export default {
  name: "RegistrationTermsAndConditions",
  components: {RequestingButton, SubmitButton, RegistrationAsideMenu},
  data(){
    return {
      requesting: false,
      activeUser: {}
    }
  },
  methods: {
    accept(){
      sessionstorage.setItem("acceptTermsAndConditions", true)
      window.location.href = "/registration-test-sample-add.html"
    }
  },
  created(){
    let token = sessionstorage.getItem("accessToken")
  }
}
</script>
<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.scss';
</style>

