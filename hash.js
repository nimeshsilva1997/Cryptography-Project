
<script type="text/javascript" src="/md5.js></script>

<script type="text/javascript" src="/sha1.js"></script>
<script type="text/javascript" src="/sha256.js"></script>
<script type="text/javascript" src="/sha512.js"></script>

<div class="indented">
<table width="100%">
  <tr><th>Input</th><td>
       @Html.TextArea("input", new { style = "width:80%" })
                    </td></tr>
  <tr><th>Method</th>
  <td style="text-align:center">

  <input type="button" onclick="document.getElementById('hash').value = hex_md5(document.getElementById('input').value)" value="MD5">
  <input type="button" onclick="document.getElementById('hash').value = hex_sha1(document.getElementById('input').value)" value="SHA-1">
       <input type="button" onclick="document.getElementById('hash').value = hex_sha256(document.getElementById('input').value)" value="SHA-256">
       <input type="button" onclick="document.getElementById('hash').value = hex_sha512(document.getElementById('input').value)" value="SHA-512">

  </td></tr>
  <tr><th>Result</th><td>
      @Html.TextArea("hash", new { style = "width:80%" })

                     </td></tr>
</table>