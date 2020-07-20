<template>
    <div>
    <iv-tabs>
        <iv-tab tabName="Tab 1" tabIndex="1" :selected="true">
            <h2>Display Content 1</h2>
        </iv-tab>

        <iv-tab tabName="Tab 2" tabIndex="2">                      
            <h2>Display Content 2</h2>
        </iv-tab>

        <iv-tab tabName="Tab 3" tabIndex="3">
            <h2>Display Content 3</h2>
        </iv-tab>
    </iv-tabs>
    </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

