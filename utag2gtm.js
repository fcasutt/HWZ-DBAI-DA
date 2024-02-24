<script>
  window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
  window.utag_cfg_ovrd.noload = true;
  window.utag = window.utag || {};
  window.utag.data = window.utag.data || {};
  window.utag_data = window.utag_data || {};
  window.utag.view = function(data){
    data = data || {};
    data["event"] = data["ga_event_name"] || data["tealium_event"] || "fallback";
    data["ut.event"] = "view";
    window.dataLayer.push(data);
  };
  window.utag.link = function(data){
    data = data || {};
    data["event"] = data["ga_event_name"] || data["tealium_event"] || "fallback";
    data["ut.event"] = "link";
    window.dataLayer.push(data);
  };
  if(window.utag_data["ga_event_name"]){
    window.utag_data["event"] = window.utag_data["ga_event_name"];
  }
  window.dataLayer.push(window.utag_data);
  
</script>
