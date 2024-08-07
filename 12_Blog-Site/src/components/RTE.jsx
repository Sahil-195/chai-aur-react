import React, { useEffect } from 'react'
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form';

function RTE({name, control, label, defaultValue = "Hello World!"}) {
  

  return (
    <div className='w-full'>
        {label && <label className='tinline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name = {name || "content"} 
    control={control}
    render={({field: {onChange}}) => (
      <Editor
      apiKey='rb0bpb7i1u0erk2xgqcmsblayakfjk2tb5ydi3bygfm7hjwa'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
      }}
      initialValue={defaultValue}
      onEditorChange={onChange}
      />
    )}/>
    </div>
  )
}

export default RTE
